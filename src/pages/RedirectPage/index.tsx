import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoLoginCallback } from "../../apis/auth/auth.ts";

export const RedirectPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            // URL에서 code 추출
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");

            if (code) {
                try {
                    // 백엔드에 GET 요청을 보내서 토큰을 가져옴
                    const response = await kakaoLoginCallback(code);

                    // 응답에서 accessToken과 refreshToken을 로컬스토리지에 저장
                    localStorage.setItem("accessToken", response.accessToken);
                    localStorage.setItem("refreshToken", response.refreshToken);

                    // /main으로 이동
                    navigate("/");
                } catch (error) {
                    console.error("토큰 요청 에러:", error);
                }
            }
        };

        fetchData();
    }, [navigate]);

    return <div>카카오 로그인 중입니다...</div>;
};