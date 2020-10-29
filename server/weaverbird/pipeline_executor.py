from typing import List

from pandas import DataFrame
from pandas.io.json import build_table_schema

from weaverbird.pipeline import Pipeline
from weaverbird.types import DomainRetriever


class PipelineExecutor:
    """
    The main class of the module.

    Its domain retriever will be use to retrieve data needed from `domains` steps.
    """

    def __init__(self, domain_retriever: DomainRetriever):
        self.retrieve_domain = domain_retriever

    def execute_pipeline(self, pipeline_steps: List[dict]) -> DataFrame:
        """
        Execute a pipeline and returns the result as a pandas DataFrame
        """
        # TODO validate the pipeline, e.g. the first step should always be a domain step
        # self.validate_pipeline()
        steps = Pipeline(steps=pipeline_steps).steps
        df = None
        for step in steps:
            df = step.execute(df, domain_retriever=self.retrieve_domain)
        # TODO validate and apply all other steps
        return df

    def preview_pipeline(
        self, pipeline_steps: List[dict], limit: int = 50, offset: int = 0
    ) -> dict:
        """
        Execute a pipeline but returns only a slice of the results, determined by `limit` and `offset` parameters, as dict.

        Return format follows the 'table' JSON table schema used by pandas (see
        https://pandas.pydata.org/pandas-docs/stable/user_guide/io.html#orient-options), with a few addition related to
        pagination.
        """
        df = self.execute_pipeline(pipeline_steps)
        return {
            'schema': build_table_schema(df, index=False),
            'offset': offset,
            'limit': limit,
            'total': df.shape[0],
            'data': df[offset : offset + limit].to_dict(orient='records'),
        }