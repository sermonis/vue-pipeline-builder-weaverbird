<template>
  <div class="query-pipeline">
    <Step
      v-for="(step, index) in steps"
      :key="index"
      :is-active="index < activeStepIndex"
      :is-last-active="index === activeStepIndex"
      :is-disabled="isDisabled(index)"
      :is-first="index === 0"
      :is-last="index === steps.length - 1"
      :step="step"
      :indexInPipeline="index"
      :variable-delimiters="variableDelimiters"
      @selectedStep="selectStep({ index: index })"
      @editStep="editStep"
    />
    <div class="query-pipeline__tips-container">
      <div class="query-pipeline__tips">
        Interact with the widgets and table on the right to add steps
      </div>
      <i class="fas fa-magic" aria-hidden="true" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { DomainStep, Pipeline, PipelineStep } from '@/lib/steps';
import { VariableDelimiters } from '@/lib/variables';
import { VQBModule } from '@/store';

import Step from './Step.vue';

@Component({
  name: 'pipeline',
  components: {
    Step,
  },
})
export default class PipelineComponent extends Vue {
  @VQBModule.State domains!: string[];
  @VQBModule.State variableDelimiters!: VariableDelimiters;

  @VQBModule.Getter('computedActiveStepIndex') activeStepIndex!: number;
  @VQBModule.Getter domainStep!: DomainStep;
  @VQBModule.Getter('pipeline') steps!: Pipeline;
  @VQBModule.Getter('isPipelineEmpty') onlyDomainStepIsPresent!: boolean;
  @VQBModule.Getter('isStepDisabled') isDisabled!: (index: number) => boolean;

  @VQBModule.Action selectStep!: ({ index }: { index: number }) => void;

  editStep(step: PipelineStep, index: number) {
    this.$emit('editStep', step, index);
  }
}
</script>

<style lang="scss" scoped>
.query-pipeline {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.query-pipeline__tips-container {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: lighter;
}

.query-pipeline__tips {
  font-size: 24px;
  color: rgb(154, 154, 154);
  margin-top: 120px;
  margin-bottom: 40px;
  text-align: center;
}

.fa-code {
  color: rgb(239, 239, 239);
}

.fa-magic {
  color: rgb(239, 239, 239);
  font-size: 64px;
}
</style>
