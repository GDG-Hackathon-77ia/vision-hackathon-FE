import { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { PageBar } from "../../components/PageBar";
import { Text } from "../../components/Text";
import * as Styles from "./index.style";

export const CheckEndPage = () => {
    const [name, setName] = useState<string>("이름");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // API 요청 함수 정의
        const fetchUserData = async () => {
            try {
                // API 호출 (예시 URL 사용)
                const response = await fetch("/api/user");
                const data = await response.json();
                // 받아온 데이터로 상태 업데이트
                setName(data.name || "이름 없음");
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            } finally {
                setLoading(false); // 로딩 상태 종료
            }
        };
        fetchUserData(); // 데이터 불러오기 함수 호출
    }, []);

    return (
        <Styles.Container>
            <PageBar pageName="문진표 작성" />
            <Styles.Wrapper>
                <Styles.TextContainer>
                    <Text size="l" weight="normal" color="white">
                        감사합니다.
                    </Text>
                    <br />
                    <Text size="l" weight="normal" color="white">
                        {loading ? (
                            "로딩 중..." // 로딩 중일 때 표시할 텍스트
                        ) : (
                            <span style={{ textDecoration: "underline" }}>{name}</span>
                        )}{" "}
                        님의 더 나은 오늘을
                    </Text>
                    <Text size="l" weight="normal" color="white">
                        응원할게요!
                    </Text>
                </Styles.TextContainer>
                <Button variant="secondary" width="152px" height="45px">
                    홈으로
                </Button>
            </Styles.Wrapper>
        </Styles.Container>
    );
};