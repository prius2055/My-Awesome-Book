import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const CurrentDateTime = DateTime.local().toLocaleString(DateTime.DATETIME_MED);

export default CurrentDateTime;
