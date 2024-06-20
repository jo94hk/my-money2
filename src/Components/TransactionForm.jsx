import { useEffect, useState } from "react";
import { useFirestore } from "../hooks/useFirestore";

export default function TransactionForm(uid) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const { addDocument, response } = useFirestore("transactions"); //트래잭션에 데이터 저장(파이엉스토어에서 새로 문서추가 가져오기)
  //클라우드 파이어스토어는 문서형 DB로 테이블 저해지지 않고 객체형식으로 입력함.
  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({
      uid,
      name,
      amount,
    });
  };

  //db에 새문서 저장후 폼 내용 없애기
  useEffect(() => {
    if (response.success) {
      setName("");
      setAmount("");
    }
  }, [response.success]);

  return (
    <div>
      <h3>거래 추가</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>거래명:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>가격(원):</span>
          <input
            type="number"
            required
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
          />
        </label>
        <button>추가</button>
      </form>
    </div>
  );
}
