import React from 'react';
import IFrame from '../components/IFrame';

export default () => {
  const [srctos, setSrctos] = React.useState<string>('/tos.txt');
  const [srcpp, setSrcpp] = React.useState<string>('/pp.txt');
  return (
    <>
      <label htmlFor="lang">Language: </label>
      <select id="lang" onChange={(e) => {
        const v = e.target.value;
        console.log(v)
        setSrctos(`/tos${v ? '.' + v : ''}.txt`);
        setSrcpp(`/pp${v ? '.' + v : ''}.txt`);
      }}>
        <option value="">English</option>
        <option value="zh">中文</option>
      </select>
      <hr />
      <IFrame src={srctos} />
      <hr />
      <IFrame src={srcpp} />
    </>
  );
};
