import FormComponentGenerator from './FormComponentGenerator';

export default FormComponentGenerator({
  defaultLabel: 'Limit',
  fields: [{
    type: 'text',
    name: 'limit',
    validator: (value) =>
      (!value.match(/^[0-9]*$/g) || value < 0 || value > 200) ? 'Limit is invalid.' : null,
  }],
});
