import { IfThenElseStepForm, registerModule } from '../../dist/storybook/components';
import { storiesOf } from '@storybook/vue';
import Vuex from "vuex";

const stories = storiesOf('Step forms/IfThenElseStepForm', module);

stories.add('IfThenElseStepForm', () => ({
  template: `
    <IfThenElseStepForm />
  `,

  components: {
    IfThenElseStepForm
  },

  store: new Vuex.Store(),

  created() {
    registerModule(this.$store, {
      dataset: {
        headers: [],
        data: [],
      },
      availableVariables: [{
        identifier: 'foo',
        value: 'bar',
        label: 'Foo',
      },{
        identifier: 'hello',
        value: 'world',
        label: 'Hello',
      },{
        identifier: 'bar',
        value: 'foo',
        label: 'Bar',
      },{
        identifier: 'world',
        value: 'Hello',
        label: 'World',
      }],
      variableDelimiters: {
        start: '{{',
        end: '}}'
      }
    })
  },
}));
