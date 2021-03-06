from typing import Any, Dict, List, Union

from pydantic import BaseModel

from weaverbird.steps import (
    AddMissingDatesStep,
    AddMissingDatesStepWithVariables,
    AggregateStep,
    AggregateStepWithVariables,
    AppendStep,
    AppendStepWithVariable,
    ArgmaxStep,
    ArgmaxStepWithVariable,
    ArgminStep,
    ArgminStepWithVariable,
    ConcatenateStep,
    ConcatenateStepWithVariable,
    ConvertStep,
    CumSumStep,
    CumSumStepWithVariable,
    DateExtractStep,
    DateExtractStepWithVariable,
    DeleteStep,
    DomainStep,
    DuplicateStep,
    DurationStep,
    DurationStepWithVariable,
    EvolutionStep,
    EvolutionStepWithVariable,
    FillnaStep,
    FillnaStepWithVariable,
    FilterStep,
    FilterStepWithVariables,
    FormulaStep,
    FormulaStepWithVariable,
    FromdateStep,
    IfthenelseStep,
    IfThenElseStepWithVariables,
    JoinStep,
    JoinStepWithVariable,
    LowercaseStep,
    MovingAverageStep,
    PercentageStep,
    PivotStep,
    PivotStepWithVariable,
    RankStep,
    RankStepWithVariable,
    RenameStep,
    RenameStepWithVariable,
    ReplaceStep,
    ReplaceStepWithVariable,
    RollupStep,
    RollupStepWithVariable,
    SelectStep,
    SortStep,
    SplitStep,
    SplitStepWithVariable,
    StatisticsStep,
    SubstringStep,
    TextStep,
    TextStepWithVariable,
    ToDateStep,
    TopStep,
    TopStepWithVariables,
    TotalsStep,
    TotalsStepWithVariable,
    UniqueGroupsStep,
    UniqueGroupsStepWithVariable,
    UnpivotStep,
    UnpivotStepWithVariable,
    UppercaseStep,
    WaterfallStep,
    WaterfallStepWithVariable,
)

PipelineStep = Union[
    AddMissingDatesStep,
    AggregateStep,
    AppendStep,
    ArgmaxStep,
    ArgminStep,
    ConcatenateStep,
    ConvertStep,
    CumSumStep,
    DateExtractStep,
    DeleteStep,
    DomainStep,
    DuplicateStep,
    DurationStep,
    EvolutionStep,
    FillnaStep,
    FilterStep,
    FromdateStep,
    FormulaStep,
    JoinStep,
    RankStep,
    RenameStep,
    PercentageStep,
    StatisticsStep,
    IfthenelseStep,
    FromdateStep,
    LowercaseStep,
    SelectStep,
    PivotStep,
    ReplaceStep,
    SortStep,
    TextStep,
    UnpivotStep,
    TopStep,
    ToDateStep,
    RollupStep,
    UniqueGroupsStep,
    UppercaseStep,
    SplitStep,
    SubstringStep,
    WaterfallStep,
    TotalsStep,
    MovingAverageStep,
]


class Pipeline(BaseModel):
    steps: List[PipelineStep]


PipelineStepWithVariables = Union[
    AggregateStepWithVariables,
    FilterStepWithVariables,
    TopStepWithVariables,
    IfThenElseStepWithVariables,
    AddMissingDatesStepWithVariables,
    AppendStepWithVariable,
    ArgmaxStepWithVariable,
    ArgminStepWithVariable,
    ConcatenateStepWithVariable,
    CumSumStepWithVariable,
    DateExtractStepWithVariable,
    DurationStepWithVariable,
    EvolutionStepWithVariable,
    FillnaStepWithVariable,
    FormulaStepWithVariable,
    JoinStepWithVariable,
    PivotStepWithVariable,
    RankStepWithVariable,
    RenameStepWithVariable,
    ReplaceStepWithVariable,
    RollupStepWithVariable,
    SplitStepWithVariable,
    TextStepWithVariable,
    TotalsStepWithVariable,
    UniqueGroupsStepWithVariable,
    UnpivotStepWithVariable,
    WaterfallStepWithVariable,
]


class PipelineWithVariables(BaseModel):
    steps: List[Union[PipelineStepWithVariables, PipelineStep]]

    def render(self, variables: Dict[str, Any], renderer) -> Pipeline:
        # TODO it must be more efficient to render the full pipeline once
        steps_rendered = [
            step.render(variables, renderer) if hasattr(step, 'render') else step for step in self.steps  # type: ignore
        ]
        return Pipeline(steps=steps_rendered)
