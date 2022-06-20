import React, {useEffect, useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {api} from "./api";

const Request = () => {
  const [checked, setChecked] = useState(false)
  const [responseMessage, setResponseMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const req = () => {
    setLoading(true)
      api.hw13(checked)
        .then(res => {
          setResponseMessage(res.data.errorText)
          setLoading(false)
        })
        .catch(error => {
          setResponseMessage(error.response.data.errorText)
          setLoading(false)
        })
  }

  return (
    <div>
      <SuperCheckbox checked={checked} onChangeChecked={(checked) => setChecked(checked) } />
      <SuperButton onClick={req} disabled={loading}>Send</SuperButton>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Request;