import pandas as pd
import pytest

from tests.utils import assert_dataframes_equals
from weaverbird.steps.select import SelectStep


@pytest.fixture()
def sample_df():
    return pd.DataFrame(
        {
            'Company': [
                'Company 1',
                'Company 2',
                'Company 3',
                'Company 4',
                'Company 5',
                'Company 6',
            ],
            'Group': ['Group1'] * 3 + ['Group2'] * 3,
            'Value': [13, 7, 20, 1, 10, 5],
        }
    )


def test_simple_select(sample_df):
    step = SelectStep(name='select', columns=['Value', 'Group'])
    result_df = step.execute(sample_df)
    expected_df = pd.DataFrame(
        {
            'Value': [13, 7, 20, 1, 10, 5],
            'Group': ['Group1'] * 3 + ['Group2'] * 3,
        }
    )
    assert_dataframes_equals(result_df, expected_df)
