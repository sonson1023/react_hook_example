//useEffect 는 리액트 컴포넌트가 렌더링 될 때마다
//특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다.

// useEffect 에 파라미터로 전달해주는 함수에서 async 를 사용하면 안됩니다.
import React, { useState, useEffect } from "react"

const Info = () => {
  const [name, setName] = useState("")
  const [nickname, setNickname] = useState("")
  useEffect(() => {
    console.log("렌더링이 완료되었습니다!")
    console.log({
      name,
      nickname,
    })
  })

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeNickname = (e) => {
    setNickname(e.target.value)
  }

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  )
}

export default Info
