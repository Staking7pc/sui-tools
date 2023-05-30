import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './RpcStatus.css'

function RpcStatus1(props) {
  var lagging={};
  const headers = [
    { key: "rpcUrl", label: "END-POINT" },
    // { key: "time", label: "LAST-CHECKED" },
    { key: "checkpoint", label: "CHECKPOINT" },
  ];  
  const [rpcDetails, setRpcDetails] = useState([]);
  const [order, setOrder] = useState('ASC');
  const [time1, settime] = useState();
  const [isCopied, setIsCopied] = useState(false);
  const [maxCheckpoint, setMaxCheckpoint] = useState(null);

  const handleCopyClick = (text) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // reset the copied state after 2 seconds
  };

  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...rpcDetails].sort((a, b) =>
        (col === 'checkpoint') ? Number(a[col]) - Number(b[col]) : (a[col] > b[col]) ? 1 : -1
      )
      setRpcDetails(sorted)
      setOrder('DSC')
    }
    if (order === 'DSC') {
      const sorted = [...rpcDetails].sort((a, b) =>
        (col === 'time' | 'rpcUrl') ? Number(b[col]) - Number(a[col]) : (b[col] > a[col]) ? 1 : -1
      )
      setRpcDetails(sorted)
      setOrder('ASC')
    }
  }

  function setEventDetails() {
    axios.get("https://sui-tools.brightlystake.com/api/sui/rpcstatus")
      .then((res) => {
        setRpcDetails(res.data);
        settime(res.data[2].time);

        // Get the maximum checkpoint value
        let max = null;
        for (const rpc of res.data) {
          const checkpoint = parseFloat(rpc.checkpoint);
          if (!isNaN(checkpoint) && (max === null || checkpoint > max)) {
            max = checkpoint;
          }
        }
        setMaxCheckpoint(max);
      });
  }

  useEffect(() => {
    setEventDetails();
  }, [])

  return (
    <div>
      <h4 className='header1'> Last checked on {time1} UTC</h4>
      <table id='validators'>
        <thead>
          <tr className='header'>
            {headers.map((row) => {
              return <td onClick={() => sorting(row.key)} key={row.key}>{row.label}</td>
            })}
          </tr>
        </thead>
        <tbody>
          {
            rpcDetails.map((val) => {
              const checkpoint = parseFloat(val.checkpoint);
              const isLessThanFive = !isNaN(checkpoint) && maxCheckpoint !== null && (maxCheckpoint - checkpoint) < 10;
              lagging[val.rpcUrl]=isLessThanFive;

              return (
                <tr className={(String(val.checkpoint).includes("Error")) ? "error" : (lagging[val.rpcUrl]!=true?'warn':'NO')} key={val.moniker}>
                  <td class="tooltip" onClick={() => handleCopyClick(val.rpcUrl)}>{val.rpcUrl}
                    <span class="tooltiptext">Click to copy</span>
                  </td>
                  <td>{val.checkpoint}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default RpcStatus1

