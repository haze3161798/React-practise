import React from 'react';

type Props = {
  id: string;
  name: string;
  addList: () => void;
  isEditId: string;
  edit: (id: string) => void;
  setName: (name: string, id: string) => void;
  deleteList:(id: string) => void;
}

function Test(props: Props) {
  const { addList, id, setName, deleteList } = props;
  const edit = () => {
    props.edit(id)
  }
  const onChangeName = (e) => {
    console.log(e);
    
    setName(e, id)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    props.edit('')
  }
  const deleteThis = () => {
    deleteList(id)
  }
  return (
    <div className="d-flex p-3">
      <div>
        {props.isEditId !== id ? <div className="text-white" style={{width: '100px'}} onDoubleClick={edit}>{props.name}</div> : <form onSubmit={submitHandler}>
        <input className="form-control" style={{width: '100px'}} value={props.name} onChange={(e)=> onChangeName(e.currentTarget.value)}/>
          </form>}
      </div>
      <button className="btn btn-primary mx-2" onClick={addList}>add</button>
      <button className='btn btn-danger' onClick={deleteThis}>delete</button>
      <button className='btn btn-info' onClick={edit}>update</button>
  </div>
  )
}
export default Test