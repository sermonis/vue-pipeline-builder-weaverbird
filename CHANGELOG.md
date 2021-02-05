# Changelog

## UNRELEASED

## Added

- strcmp step: compares 2 text columns and returns true if text matches, false otherwise

## [0.36.1] - 2021-02-01

### Fixed

- FromDateStep : text translations were missing for mongo42 pipeline translator

## [0.37.0] - 2021-01-26

### Added

- movingaverage step: now supported in pandas backend

## [0.36.0] - 2021-01-18

### Added

- convert step: support cast from integer to date and from date to integer

## [0.35.1] - 2021-01-15

### Fixed

- Mongo: Fix operator "not in" (`nin`) in if/then/else conditions

## [0.35.0] - 2021-01-07

### Fixed

- Bound active step to pipeline size to avoid ending up with no step selected in some specific cases
- IfThenElseWidget: display opened dropdown correctly when there is conditions

## [0.34.1] - 2020-12-18

### Fixed

- Only one request to preview data when changing the domain (two were fired previously)
- Mongo 4.2: fix parameters passed to `$regexMatch`

## [0.34.0] - 2020-12-17

### Added

- Tooltip for column names in DataViewer (useful for long ones that needs to be copied easily)
- Mongo 4.2 translator, with support of regex in filtering conditions

## [0.33.5] - 2020-12-08

### Fixed

- ConditionsEditor, ConditionsGroup: pass the default value everywhere

## [0.33.4] - 2020-12-07

### Fixed

- ConditionsEditor: pass the default value to ConditionsGroup

## [0.33.3] - 2020-12-03

### Fixed

- FilterStep, IfThenElseStep: fix `columnTypes` forwarding to FilterEditor

## [0.33.2] - 2020-12-02

### Fixed

- FilterStep: define default value rather than using undefined to avoid cast issues

## [0.33.1] - 2020-12-01

### Added

- FilterEditor: add `long` as available number type

## [0.33.0] - 2020-11-27

- **Breaking** FilterEditor now takes a `columnTypes` props instead of a `columnNames` props and handles casting

## [0.32.0] - 2020-11-24

## Changed

- **Breaking** The BackendService is not anymore included in a Vuex plugin. It's now in the state of the Vuex module. This allow changing it after the store has been instantiated.

### Fixed

- docs: missing slash was breaking a link in the nav
- The preview does not throw an error when the edited pipeline is empty (instead, show an empty dataset)

## [0.31.1] - 2020-12-02

### Fixes

- FillnaStep: use undefined as `column` default (retrompatibility) and display errors if there is less than one item selected in `columns`

## [0.31.0] - 2020-11-23

### Added

- FilterStep: enable filtering with array variables in in/notin comparison

## Changed

- Checkboxes: hovered and checked states are more distinct visually
- Hide actions corresponding to steps that are not supported by the current

## [0.30.0] - 2020-11-12

### Added

- Add an "addmissingdates" step (to add mising dates as new rows in a dates column)
- Add a "totals" step (to compute and append total rows)
- Add a "movingaverage" step (to compute a moving average in a new column)
- Add a "duration" step (to compute a a duration between 2 dates)
- templating support in rename step

## [0.29.0] - 2020-11-02

### Changed

- pivot step: support variables interpolation
- pivot step: allow for empty index parameter
- unpivot step: support variables interpolation

## [0.28.1] - 2020-10-20

### Added

- Resizable: doesn't sort the columns options anymore

## [0.28.0] - 2020-10-20

### Added

- Resizable: use v-resizable directive to resize columns of a table
- DataViewer: add resizable directive to table

## [0.27.2] - 2020-10-19

### Fixes

- Multiinputext: avoid inputs to overlap value dropdown

## [0.27.1] - 2020-10-13

### Fixes

- Templating: translate append and join steps

## [0.27.0] - 2020-10-06

### Changed

- Display a tooltip with value when hovering a variable in variables dropdown

### Fixes

- Formula / IfThenElse Steps: allow to use variable

## [0.26.0] - 2020-09-23

### Changed

- Allow to select multiple columns in fillna step (to fill null values in several
  columns at once)
- Allow to select multiple columns in aggregations (the same aggregation function
  can be applied to several columns easily)

## [0.25.2] - 2020-09-15

### Fixes

- Remove autocast during pipeline interpolation

## [0.25.1] - 2020-09-09

### Fixes

- CodeEditor: rework the `setAvailableCodeEditors` public export

## [0.25.0] - 2020-09-08

### Added

- CodeEditor: replace `setCodeEditor` by `setAvailableCodeEditors` to set specific config for a CodeEditor
- Rename step: allow multiple columns renaming at once
- Variables: use advanced variables in variable inputs
- Version: display current version of package in documentation link

### Fixes

- Templating: add support in various steps
- Action menu: keep menu open when using `load all values`

## [0.24.0] - 2020-08-31

### Added

- Add 'rank' step
- Add 'waterfall' step
- Add an advanced variable modal component to create custom variable
- Add a mutation to populate store with advanced variable delimiters
- Add templating support for several steps parameters

### Changed

- Improve 'aggregate' step by adding an option to keep the original granularity
  and add computed aggregations in new columns

### Changed

- Improve 'rename' step by allowing to rename several columns at once

### Fixed

- Append, Domain, Join steps: sort the dataset selection
- VariableInput: position of the add variable button in input

## [0.23.2] - 2020-08-19

### Fixed

- Multiselect: transform object to string for MultiVariableInput

## [0.23.1] - 2020-08-18

### Fixed

- Multiselect: display custom label correctly

## [0.23.0] - 2020-08-14

## Added

- Enable variables usage in all eligible steps

### Fixed

- Accessibility for delete icons in filter step form
- Allow to use unique variable in multiInputText of FilterEditor

## [0.22.0] - 2020-08-14

### Added

- Allow to use variables in ListWidget
- Allow to use variables in InputNumberWidget
- MultiVariableInput to select multiple variables in MultiTextInput or Multiselect
- Prevent cyclic jointures between pipelines

### Fixed

- Remove variable delimiters in pipeline step name

## [0.21.0] - 2020-08-06

## Added

- Allow to use store `availableVariables` and `variableDelimiters` in FilterStep

## [0.20.0] - 2020-08-03

### Fixed

- Mongo translator: generate a join step with column names containing any character
- Pagination: always display pagination for multiple pages dataset
- Filters: keep value if typeof match on operator change
- MongoQuery: degroup addFields

## Added

- Util to compare value types
- "If...Then...Else": util file to display human format formula
- Allow to use variables in AutocompleteWidget

## Changed

- "If...Then...Else": button to toggle step
- "If...Then...Else": button to delete specific step
- "If...Then...Else": button to add elseif nested condition
- Variable input: add tooltip with value when hovering tag

### Added

- Move pipeline dereference methods into utils file
- Getter to retrieve available pipelines in steps form

### Changed

- A pipeline can start by a reference to an other pipeline

## [0.19.3] - 2020-07-20

### Fixed

- Filter step: allow to filter with empty or undefined values
- Filter step: keep null value for numerical columns
- "If...Then...Else" step: cast values on deeper conditional levels

## [0.19.2] - 2020-07-06

### Fixed

- Open the vue-multiselect on the bottom direction

## [0.19.1] - 2020-06-23

### Fixed

- ifthenelse doc permalink

## [0.19.0] - 2020-06-15

## Added

- "If...Then...Else" step to add conditional columns

## [0.18.0] - 2020-06-09

### Added

- Data format presets in todate and fromdate steps
- `statistics` step form to compute main statistics, like median or quintiles, of a numeric column.

### Changed

- Button to toggle variable input is '{}'

## [0.17.4] - 2020-05-15

### Fixed

- Popover to choose a variable were not opening

## [0.17.3] - 2020-05-14

### Changed

- better handle of backend messages (error or warning) from `BackendService`
- Unique values are now sorted in alphanumeric order
- Parameters order in text and formula steps forms
- Deactivate date conversion option depending on columnn datatype in `DataTypesMenu`

### Added

- a trivial state getter to get backendMessage (useful when vuex sate is in strict mode)

## [0.17.2] - 2020-05-13

### Fixed

- popover positioning and mounting

## [0.17.0] - 2020-05-12

### Added

- `FilterEditor` form widgets supports variables that user can choose from a list

### Fixed

- Popover positioning and mount
- `ActionMenu` always open on first panel, even if user has previously open the second panel

## [0.16.1] - 2020-05-05

### Changed

- `totalCount` becomes mandatory in `paginationContext` in DataSet
- Design of "Apply Filter" in column action menu has been updated

### Fixed

- pagination appears if DataSet is not complete
- column unique values can be of any type
- action toolbar buttons style

## [0.16.0] - 2020-04-29

### Changed

- `isLoading` state properties has now two keys: `dataset` and `uniqueValues` to identify what is loading.

### Added

- New component `ListUniqueValues` which will be used to display column's unique values.
- When the dataset is updated, compute unique values for each columns using available rows and insert them in dataset's header
- New section in action menu to display unique values of column and allow user to filter them. The action menu is also split into two panels

### Fixed

- Fix setup of store in Storybook

## [0.15.1] - 2020-04-06

### Changed

- The Popover is not necessary mounted when not visible. Column's action menu are then not mounted, improving performance of DataSetViewer.

### Fixed

- Fixed bad sort step from initialization
- Fixed columnPicker to prevent the mutation of the props
- Fixed the no uniqueness of widgets ids by replacing them by class
- Fixed checkbox props propagation
- Fixed the aggregation step when performing an aggregation on one of the id columns

## [0.15.0] - 2020-03-24

### Changed

- Revamp the filter step to allow edition of nested logical trees

### Added

- Add a `docUrl` prop to widget-input-text so that a help picto with a direct
  link to documentation can can be easily added to the the component
- Add a help picto in `todate` and `fromdate` steps UI that links to the Mongo
  documentation referencing supported date formats

## [0.14.0] - 2020-03-17

### Added

- Add a "Compute evolution" step (Mongo translation + UI)
- Add a `cumsum` step to compute cumulated sums

## [0.13.1] - 2020-03-06

### Added

- Introduce a bracket syntax to escape column names with spaces in formula step
- Documentation for the UI of fromdate, todate, custom and concatenate steps

### Changed

- Remove `setDomainCollectionMap` in favor `setDomainToCollection` in mongo translator
- Write percentage step result in a new column
- Write substring step result in a new column
- Fix update problems of Aggregation widget
- Fix update problems of JoinColumns widget

## [0.12.0] - 2020-02-26

### Added

- add support for templating in custom step
- Add translation and UI for rollup steps (to aggregate and stack data by
  hierarchical levels)
- new Logo!

### Changed

- removed `pipeline` attribute in the store, recompute it dynamically from
  `pipelines` and `currentPipelineName` attributes.

## [0.11.0] - 2020-02-12

### Added

- add UI for "format" parameter in "todate" step (not supported for mongo36
  translator)
- expose `setCodeEditor` to set a custom code editor component for custom steps
- custom step which allows users to edit manually a step
- uniquegroups step to get unique groups/values" from columns
- escape column name between `[ ]` in formula step in mongo translator

## [0.10.0] - 2020-02-06

### Added

- add "date extraction" operations
- added basic regexp support in filter steps

### Changed

- aggregation step input columns are now templatable

### Fixed

- Fixed unpivot step where dropna parameter was not handled properly

## [0.9.0] - 2020-01-13

### Added

- date extraction steps and corresponding mongo translations

### Changed

- Replaced the "CANCEL" button in the footer by a "Back" button in the header.

## [0.8.0] - 2020-01-03

### Added

- `logBackendError` and `resetBackendErrors` mutations.

### Breaking

- removed `setBackendError` mutation, please use `logBackendError` instead.

### Changed

- Replaced the "CANCEL" button in the footer by a "Back" button in the header.

## [0.7.0] - 2019-12-17

### Added

- Added `isnull` and `notnull` operators in filter operations,
- Improved pagination component so that integration and component update
  is easier.

### Fixed

- Fixed pagination bug where page number was always reset to `1`.

## [0.6.0] - 2019-12-09

### Added

- Added `append` step (to append datasets resulting from multiple pipelines)
- Added `join` step (to perform either _left outer joins_ or _inner joins_)
- Mongo4.0 translator scaffold
- Add data types conversion operations (with specific UI), only supported by
  the 'mongo40' translator
- Add an 'Add text column' operation
- Introduce a new 'Add' widget (including adding a nex text or formula column)
- Introduce direct links to documention in the UI
- Add 'isnull' and 'notnull' operators in filter step

### Fixed

- build stepform validator at submit time to avoid race condition
  between `_updateDataset` and `initialize`

## [0.5.1] - 2019-12-04

### Fixed

- Removed usage of `Array.prototype.flat` to be compatible with Edge
  (cf. [issue #387](https://github.com/ToucanToco/weaverbird/issues/387))

## [0.5.0] - 2019-11-13

### Added

- Added `fromdate` step (converts date into string)
- Added `todate` step (converts string into date)

### Changed

- Use TypeScript 3.7

## [0.4.0] - 2019-10-22

### Changed

- Revamped documentation and auto-publish it on https://weaverbird.toucantoco.com
- Renamed project and repository into `weaverbird`

### Fixed

- Fixed closing popover on ActionButton when opening one on column header cell

### Changed

- Simplify lowercase and uppercase UI workflow (no need to open form when a
  column is selected)

### Added

- Added `concatenate` step
- Added `split` step

## [0.3.0] - 2019-10-08

### Added

- Added variable interpolation + autocast handling
- Added `lowercase` step
- Added `uppercase` step

### Changed

- Simplify `percentage` step by removing the optional parameter `new_column`

- Simplify `unpivot` step UX by enforcing automatic column names for
  `unpivot_column_name` and `value_column_name` (not requiring for a user input
  anymore)

### Fixed

- Fixed `top` step initialization (`rank_on` parameter)
- Fixed `argmin` and `argmax` labelling, initialization and interactions
- Fixed shared references between items in List widget.

## [0.2.0] - 2019-09-26

### Added

- Fill "column" field of the filter step when a column is selected.

### Fixed

- Fixed CSS scoping to avoid cluttering style of host application.

## [0.1.0] - 2019-09-17

### Added

- Initial version, showtime!

[0.37.0]: https://github.com/ToucanToco/weaverbird/compare/v0.36.0...v0.37.0
[0.36.1]: https://github.com/ToucanToco/weaverbird/compare/v0.36.0...v0.36.1
[0.36.0]: https://github.com/ToucanToco/weaverbird/compare/v0.35.1...v0.36.0
[0.35.1]: https://github.com/ToucanToco/weaverbird/compare/v0.35.0...v0.35.1
[0.35.0]: https://github.com/ToucanToco/weaverbird/compare/v0.34.1...v0.35.0
[0.34.1]: https://github.com/ToucanToco/weaverbird/compare/v0.34.0...v0.34.1
[0.34.0]: https://github.com/ToucanToco/weaverbird/compare/v0.33.5...v0.34.0
[0.33.5]: https://github.com/ToucanToco/weaverbird/compare/v0.33.4...v0.33.5
[0.33.4]: https://github.com/ToucanToco/weaverbird/compare/v0.33.3...v0.33.4
[0.33.3]: https://github.com/ToucanToco/weaverbird/compare/v0.33.2...v0.33.3
[0.33.2]: https://github.com/ToucanToco/weaverbird/compare/v0.33.1...v0.33.2
[0.33.1]: https://github.com/ToucanToco/weaverbird/compare/v0.33.0...v0.33.1
[0.33.0]: https://github.com/ToucanToco/weaverbird/compare/v0.32.0...v0.33.0
[0.32.0]: https://github.com/ToucanToco/weaverbird/compare/v0.31.0...v0.32.0
[0.31.1]: https://github.com/ToucanToco/weaverbird/compare/v0.31.0...v0.31.1
[0.31.0]: https://github.com/ToucanToco/weaverbird/compare/v0.30.0...v0.31.0
[0.30.0]: https://github.com/ToucanToco/weaverbird/compare/v0.29.0...v0.30.0
[0.29.0]: https://github.com/ToucanToco/weaverbird/compare/v0.28.1...v0.29.0
[0.28.1]: https://github.com/ToucanToco/weaverbird/compare/v0.28.0...v0.28.1
[0.28.0]: https://github.com/ToucanToco/weaverbird/compare/v0.27.2...v0.28.0
[0.27.2]: https://github.com/ToucanToco/weaverbird/compare/v0.27.1...v0.27.2
[0.27.1]: https://github.com/ToucanToco/weaverbird/compare/v0.27.0...v0.27.1
[0.27.0]: https://github.com/ToucanToco/weaverbird/compare/v0.26.0...v0.27.0
[0.26.0]: https://github.com/ToucanToco/weaverbird/compare/v0.25.2...v0.26.0
[0.25.2]: https://github.com/ToucanToco/weaverbird/compare/v0.25.1...v0.25.2
[0.25.1]: https://github.com/ToucanToco/weaverbird/compare/v0.25.0...v0.25.1
[0.25.0]: https://github.com/ToucanToco/weaverbird/compare/v0.24.0...v0.25.0
[0.24.0]: https://github.com/ToucanToco/weaverbird/compare/v0.23.2...v0.24.0
[0.23.2]: https://github.com/ToucanToco/weaverbird/compare/v0.23.1...v0.23.2
[0.23.1]: https://github.com/ToucanToco/weaverbird/compare/v0.23.0...v0.23.1
[0.23.0]: https://github.com/ToucanToco/weaverbird/compare/v0.22.0...v0.23.0
[0.22.0]: https://github.com/ToucanToco/weaverbird/compare/v0.21.0...v0.22.0
[0.21.0]: https://github.com/ToucanToco/weaverbird/compare/v0.20.0...v0.21.0
[0.20.0]: https://github.com/ToucanToco/weaverbird/compare/v0.19.3...v0.20.0
[0.19.3]: https://github.com/ToucanToco/weaverbird/compare/v0.19.2...v0.19.3
[0.19.2]: https://github.com/ToucanToco/weaverbird/compare/v0.19.1...v0.19.2
[0.19.1]: https://github.com/ToucanToco/weaverbird/compare/v0.19.0...v0.19.1
[0.19.0]: https://github.com/ToucanToco/weaverbird/compare/v0.18.0...v0.19.0
[0.18.0]: https://github.com/ToucanToco/weaverbird/compare/v0.17.4...v0.18.0
[0.17.4]: https://github.com/ToucanToco/weaverbird/compare/v0.17.3...v0.17.4
[0.17.3]: https://github.com/ToucanToco/weaverbird/compare/v0.17.2...v0.17.3
[0.17.2]: https://github.com/ToucanToco/weaverbird/compare/v0.17.0...v0.17.2
[0.17.0]: https://github.com/ToucanToco/weaverbird/compare/v0.16.1...v0.17.0
[0.16.1]: https://github.com/ToucanToco/weaverbird/compare/v0.16.0...v0.16.1
[0.16.0]: https://github.com/ToucanToco/weaverbird/compare/v0.15.1...v0.16.0
[0.15.1]: https://github.com/ToucanToco/weaverbird/compare/v0.15.0...v0.15.1
[0.15.0]: https://github.com/ToucanToco/weaverbird/compare/v0.14.0...v0.15.0
[0.14.0]: https://github.com/ToucanToco/weaverbird/compare/v0.13.1...v0.14.0
[0.13.1]: https://github.com/ToucanToco/weaverbird/compare/v0.12.0...v0.13.1
[0.12.0]: https://github.com/ToucanToco/weaverbird/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/ToucanToco/weaverbird/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/ToucanToco/weaverbird/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/ToucanToco/weaverbird/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/ToucanToco/weaverbird/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/ToucanToco/weaverbird/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/ToucanToco/weaverbird/compare/v0.5.0...v0.6.0
[0.5.1]: https://github.com/ToucanToco/weaverbird/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/ToucanToco/weaverbird/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/ToucanToco/weaverbird/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/ToucanToco/weaverbird/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/ToucanToco/weaverbird/releases/tag/v0.2.0
