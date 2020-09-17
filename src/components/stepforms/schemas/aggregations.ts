export default {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      columns: {
        type: 'array',
        minItems: 1,
        items: {
          type: 'string',
          minLength: 1,
        },
      },
      column: {
        // deprecated
        type: 'string',
        minLength: 1,
      },
      aggfunction: {
        type: 'string',
        enum: ['sum', 'avg', 'count', 'min', 'max', 'first', 'last'],
      },
      newcolumns: {
        type: 'array',
        minItems: 1,
        items: {
          type: 'string',
          minLength: 1,
        },
      },
      newcolumn: {
        // deprecated
        type: 'string',
        minLength: 1,
      },
    },
    required: ['columns', 'aggfunction', 'newcolumns'],
    additionalProperties: false,
  },
  minItems: 1,
  title: 'Aggregations',
  description: 'The aggregations to be performed',
};
