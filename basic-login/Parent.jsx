'use client';
import Child1 from "./Child1";
import Child2 from "./Child2";
import { useState } from "react";

export default function Parent() {
    const [isLogin, setIsLogin] = useState(false);
    {/* true -> child2  */}
    {/* false -> child1 */}
    return (
        <div >
            <h1>Parent</h1>
            {isLogin ? (
                <Child2 onLogout={() => setIsLogin(false)}/>
            ) : (
                <Child1 onLoginScreen={() => setIsLogin(true)}/>
            )}
        </div>
    )
}