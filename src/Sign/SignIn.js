import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Img/logo.png';

function SignIn({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');
    
        const url = '/login';
    
        try {
            console.log('Sending username:', username);
            console.log('Sending password:', pw);
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    pw: pw,
                }),
            });
    
            console.log('Response status:', response.status);
            console.log('Response headers:', [...response.headers.entries()]);

            if (!response.ok) {
                const errorText = await response.text();
                console.log('Error text:', errorText);
                alert("로그인에 실패했습니다.", "error");
                throw new Error(errorText || "로그인에 실패하였습니다.");
            }
    
            const token = response.headers.get('Authorization'); // 토큰 읽기
    
            if (token) {
                localStorage.setItem("token", token);
                console.log('Token received and stored successfully.');
                // onLogin(username); // 로그인 성공 시 사용자 상태 업데이트
            } else {
                console.log('Token not received from the server');
            }
        } catch (error) {
            alert(error.message);
        }

    

        //     try {
        //       const url = 'http://10.125.121.175:8080/login';
        //       const body = { username, pw };

        //       const response = await fetch(url, {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(body),
        //       });

        //       // 응답이 JSON인지 확인
        //       const contentType = response.headers.get('Content-Type');
        //       let data = {};

        //       if (contentType && contentType.includes('application/json')) {
        //         const text = await response.text();
        //         data = JSON.parse(text); // JSON으로 파싱
        //       } else {
        //         throw new Error('서버 응답이 올바른 JSON 형식이 아닙니다.');
        //       }

        //       if (!response.ok) {
        //         throw new Error(data.message || '로그인 정보가 올바르지 않습니다.');
        //       }

        //       // 토큰과 별명 저장
        //       localStorage.setItem('token', data.token);
        //       localStorage.setItem('alias', data.alias);
        //       setIsAuthenticated(true);
        //     } catch (error) {
        //       setLoginError(error.message);
        //     }
          };

        return (
            <div className="flex items-center justify-center h-full bg-gradient-to-b from-black to-[#1a1b41]">
                <div className="flex flex-col w-1/4 items-center">
                    <img src={logo} alt="Logo" className="mb-2 w-20 h-auto" />
                    <span className="logo-text mb-10 ml-5">SMARTSHIP</span>
                    <form onSubmit={handleSubmit} className="bg-white w-full max-w-sm p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 text-center font-poppins">SIGN IN</h2>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">아이디</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">비밀번호</label>
                            <input
                                type="password"
                                value={pw}
                                onChange={(e) => setPw(e.target.value)}
                                required
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>

                        {loginError && <p className="text-red-500 pb-2">{loginError}</p>}

                        <button
                            type="submit"
                            className="w-full bg-purple-800 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            로그인
                        </button>

                        <p className="mt-4 text-sm text-gray-600 text-center">
                            계정이 없으신가요?
                            <button
                                type="button"
                                onClick={() => navigate('/signup')}
                                className="text-purple-600 underline ml-2"
                            >
                                회원가입
                            </button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
    export default SignIn;

