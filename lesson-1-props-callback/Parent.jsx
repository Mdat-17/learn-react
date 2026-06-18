'use client';
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import { useState } from "react";

export default function Parent() {
    const [score, setScore] = useState(0);
   
    const nhanDuLieuTuChild = (data) => {
        setScore(data);
        alert(data);
    }
    return (
        <div>
            <h1>Parent</h1>
            <Child1 message="Xin chào từ component cha" />
            <Child2 zalo="Zalo" />
            <Child3 onReport={nhanDuLieuTuChild} />
        </div>
    )
}