import * as React from "react";
import { useRecordContext } from 'react-admin';

const MyUrlField = ({ source }) => {
  const record = useRecordContext();
  return record ? (
      <a href={record[source]} target="_blank" rel="noreferrer">
        {record[source]}
      </a>
  ) : null;
}

export default MyUrlField;