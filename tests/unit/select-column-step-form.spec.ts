import { expect } from 'chai';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import SelectColumnStepForm from '@/components/stepforms/SelectColumnStepForm.vue';
import WidgetMultiselect from '@/components/stepforms/WidgetMultiselect.vue';
import Vuex, { Store } from 'vuex';
import { setupStore } from '@/store';
import { Pipeline } from '@/lib/steps';
import { VQBState } from '@/store/state';

const localVue = createLocalVue();
localVue.use(Vuex);

interface ValidationError {
  dataPath: string;
  keyword: string;
}

describe('Select Column Step Form', () => {
  let emptyStore: Store<VQBState>;
  beforeEach(() => {
    emptyStore = setupStore({});
  });

  it('should instantiate', () => {
    const wrapper = shallowMount(SelectColumnStepForm, { store: emptyStore, localVue });
    expect(wrapper.exists()).to.be.true;
    expect(wrapper.vm.$data.stepname).equal('select');
  });

  it('should have a widget multiselect', () => {
    const wrapper = shallowMount(SelectColumnStepForm, { store: emptyStore, localVue });

    expect(wrapper.find('widgetmultiselect-stub').exists()).to.be.true;
  });

  it('should instantiate a multiselect widget with proper options from the store', () => {
    const store = setupStore({
      dataset: {
        headers: [{ name: 'columnA' }, { name: 'columnB' }, { name: 'columnC' }],
        data: [],
      },
    });
    const wrapper = shallowMount(SelectColumnStepForm, { store, localVue });
    const widgetAutocomplete = wrapper.find('widgetmultiselect-stub');

    expect(widgetAutocomplete.attributes('options')).to.equal('columnA,columnB,columnC');
  });

  it('should report errors when submitted data is not valid', () => {
    const wrapper = mount(SelectColumnStepForm, { store: emptyStore, localVue });
    wrapper.find('.widget-form-action__button--validate').trigger('click');
    const errors = wrapper.vm.$data.errors.map((err: ValidationError) => ({
      keyword: err.keyword,
      dataPath: err.dataPath,
    }));
    expect(errors).to.eql([{ keyword: 'minItems', dataPath: '.columns' }]);
  });

  it('should validate and emit "formSaved" when submitted data is valid', () => {
    const wrapper = mount(SelectColumnStepForm, {
      store: emptyStore,
      localVue,
      propsData: {
        initialStepValue: { name: 'select', columns: ['foo'] },
      },
    });
    wrapper.find('.widget-form-action__button--validate').trigger('click');
    expect(wrapper.vm.$data.errors).to.be.null;
    expect(wrapper.emitted()).to.eql({
      formSaved: [[{ name: 'select', columns: ['foo'] }]],
    });
  });

  it('should emit "cancel" event when edition is canceled', () => {
    const pipeline: Pipeline = [
      { name: 'domain', domain: 'foo' },
      { name: 'rename', oldname: 'foo', newname: 'bar' },
    ];
    const store = setupStore({
      pipeline,
      selectedStepIndex: 1,
    });

    const wrapper = mount(SelectColumnStepForm, { store, localVue });
    wrapper.find('.widget-form-action__button--cancel').trigger('click');
    expect(wrapper.emitted()).to.eql({ cancel: [[]] });
    expect(store.state.selectedStepIndex).to.equal(1);
    expect(store.state.pipeline).to.eql([
      { name: 'domain', domain: 'foo' },
      { name: 'rename', oldname: 'foo', newname: 'bar' },
    ]);
  });

  it('should update selectedColumn when column is changed', async () => {
    const store = setupStore({
      dataset: {
        headers: [{ name: 'columnA' }, { name: 'columnB' }, { name: 'columnC' }],
        data: [],
      },
      selectedColumns: ['columnA'],
    });
    const wrapper = mount(SelectColumnStepForm, {
      propsData: {
        initialValue: {
          columns: ['columnA'],
        },
      },
      store,
      localVue,
    });
    wrapper.setData({ editedStep: { columns: ['columnB'] } });
    await wrapper.find(WidgetMultiselect).trigger('input');
    expect(store.state.selectedColumns).to.eql(['columnB']);
  });

  it('should reset selectedStepIndex correctly on cancel depending on isStepCreation', () => {
    const pipeline: Pipeline = [
      { name: 'domain', domain: 'foo' },
      { name: 'rename', oldname: 'foo', newname: 'bar' },
      { name: 'rename', oldname: 'baz', newname: 'spam' },
      { name: 'rename', oldname: 'tic', newname: 'tac' },
    ];
    const store = setupStore({
      pipeline,
      selectedStepIndex: 2,
    });
    const wrapper = mount(SelectColumnStepForm, { store, localVue });
    wrapper.setProps({ isStepCreation: true });
    wrapper.find('.widget-form-action__button--cancel').trigger('click');
    expect(store.state.selectedStepIndex).to.equal(2);
    wrapper.setProps({ isStepCreation: false });
    wrapper.find('.widget-form-action__button--cancel').trigger('click');
    expect(store.state.selectedStepIndex).to.equal(3);
  });
});