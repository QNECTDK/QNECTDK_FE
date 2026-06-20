import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Header from "../components/Header";
import Button from "../components/Button";
import { getShopItems, getMyItems, equipItem } from "../api/shop";

function CharacterChange() {
  const navigate = useNavigate();

  const [myCharacters, setMyCharacters] = useState([]); // [{ userItemId, itemId, name, imageUrl, isEquipped }]
  const [selectedUserItemId, setSelectedUserItemId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // 전체 상점 아이템(이름/이미지)과 내 보유 아이템(itemId, isEquipped)을 동시에 받아서 매칭
        const [shopResult, myItemsResult] = await Promise.all([
          getShopItems(),
          getMyItems(),
        ]);

        const shopItemMap = {};
        shopResult.data.forEach((item) => {
          shopItemMap[item.itemId] = item;
        });

        // 보유 아이템 중 캐릭터(CHARACTER) 타입만 골라서, 이름/이미지 정보를 합침
        const characters = myItemsResult.data
          .filter((myItem) => myItem.type === "CHARACTER")
          .map((myItem) => {
            const shopInfo = shopItemMap[myItem.itemId] || {};
            return {
              userItemId: myItem.userItemId,
              itemId: myItem.itemId,
              name: shopInfo.name || "이름 없음",
              imageUrl: shopInfo.imageUrl || "",
              isEquipped: myItem.isEquipped,
            };
          });

        setMyCharacters(characters);

        // 현재 적용된 캐릭터를 기본 선택값으로
        const equippedOne = characters.find((c) => c.isEquipped);
        if (equippedOne) {
          setSelectedUserItemId(equippedOne.userItemId);
        }
      } catch (err) {
        console.error("캐릭터 목록 조회 실패", err);
        setErrorMessage("캐릭터 정보를 불러오지 못했습니다");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const currentCharacter = myCharacters.find((c) => c.isEquipped);

  const handleChange = async () => {
    if (!selectedUserItemId) return;

    setIsSubmitting(true);
    try {
      await equipItem(selectedUserItemId);
      navigate(-1);
    } catch (err) {
      console.error("캐릭터 변경 실패", err);
      setErrorMessage("캐릭터 변경에 실패했습니다");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <PageLayout>
        <Header title="프로필" onBack={() => window.history.back()} />
        <p style={{ textAlign: "center", marginTop: "40px" }}>불러오는 중...</p>
      </PageLayout>
    );
  }

  if (errorMessage && myCharacters.length === 0) {
    return (
      <PageLayout>
        <Header title="프로필" onBack={() => window.history.back()} />
        <p style={{ textAlign: "center", marginTop: "40px", color: "red" }}>
          {errorMessage}
        </p>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Header title="프로필" onBack={() => window.history.back()} />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ textAlign: "center" }}>
          {/* 현재 캐릭터 */}
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              backgroundColor: "#fde3e3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
            }}
          >
            {currentCharacter?.imageUrl ? (
              <img
                src={currentCharacter.imageUrl}
                alt="현재 캐릭터"
                style={{ width: "90px", height: "90px", objectFit: "contain" }}
              />
            ) : (
              <span style={{ fontSize: "13px", color: "#aaa" }}>
                캐릭터 없음
              </span>
            )}
          </div>
          <p
            style={{ marginTop: "16px", fontWeight: "bold", fontSize: "16px" }}
          >
            현재 캐릭터
          </p>
        </div>

        <div>
          <div style={{ borderTop: "1px solid #eee", marginBottom: "20px" }} />
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "16px",
              fontSize: "15px",
              textAlign: "center",
            }}
          >
            보유 캐릭터
          </p>

          {myCharacters.length === 0 ? (
            // 보유 캐릭터가 없을 때 안내 + 상점으로 이동
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <p
                style={{
                  color: "#888",
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                아직 보유한 캐릭터가 없어요.
                <br />
                상점에서 구매해보세요!
              </p>
              <Button
                label="상점으로 가기"
                onClick={() => navigate("/point")}
                variant="secondary"
                size="full"
              />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {myCharacters.map((char, i) => {
                const bgColors = [
                  "#fde3d8",
                  "#dff0d8",
                  "#d6e7fb",
                  "#f0d7ff",
                  "#ffe9d6",
                ];
                const isSelected = selectedUserItemId === char.userItemId;
                return (
                  <div
                    key={char.userItemId}
                    onClick={() => setSelectedUserItemId(char.userItemId)}
                    style={{
                      width: "92px",
                      height: "92px",
                      borderRadius: "50%",
                      backgroundColor: bgColors[i % bgColors.length],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: isSelected
                        ? "3px solid var(--color-primary)"
                        : "3px solid transparent",
                      cursor: "pointer",
                    }}
                  >
                    {char.imageUrl ? (
                      <img
                        src={char.imageUrl}
                        alt={char.name}
                        style={{
                          width: "56px",
                          height: "56px",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <span style={{ fontSize: "11px", color: "#aaa" }}>
                        {char.name}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {errorMessage && myCharacters.length > 0 && (
          <p style={{ color: "red", fontSize: "13px", textAlign: "center" }}>
            {errorMessage}
          </p>
        )}

        {myCharacters.length > 0 && (
          <Button
            label={isSubmitting ? "변경 중..." : "캐릭터 변경"}
            onClick={handleChange}
            variant="primary"
            size="full"
            disabled={isSubmitting}
          />
        )}
      </div>
    </PageLayout>
  );
}

export default CharacterChange;
