import axiosInstance from "./axiosInstance";

// 상점 전체 아이템 목록 (이름/이미지/가격 포함)
export const getShopItems = async () => {
  const response = await axiosInstance.get("/api/shop/items");
  return response.data; // { success, data: [{ itemId, name, type, imageUrl, price }] }
};

// 내가 보유한 아이템 목록 (itemId, isEquipped만 있음 - 이름/이미지는 getShopItems와 매칭 필요)
export const getMyItems = async () => {
  const response = await axiosInstance.get("/api/shop/my-items");
  return response.data; // { success, data: [{ userItemId, itemId, type, isEquipped }] }
};

// 아이템 적용 (캐릭터 변경 등) - userItemId를 경로에 포함, body 없음
export const equipItem = async (userItemId) => {
  const response = await axiosInstance.patch(
    `/api/shop/my-items/${userItemId}/equip`,
  );
  return response.data;
};

// 아이템 해제
export const unequipItem = async (userItemId) => {
  const response = await axiosInstance.patch(
    `/api/shop/my-items/${userItemId}/unequip`,
  );
  return response.data;
};

// 아이템 구매
export const purchaseItem = async (itemId) => {
  const response = await axiosInstance.post(
    `/api/shop/items/${itemId}/purchase`,
  );
  return response.data;
};
