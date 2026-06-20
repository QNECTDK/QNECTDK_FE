import axiosInstance from "./axiosInstance";

// 내 친구 목록
export const getFriends = async () => {
  const response = await axiosInstance.get("/api/friends");
  return response.data;
};

// 친구 추가 요청 - 상대방의 userId(addresseeId)를 보냄. 즉시 친구가 되는 게 아니라
// status: "PENDING" 상태로 생성됨. 상대방이 accept를 눌러야 진짜 친구가 됨
export const requestFriend = async (addresseeId) => {
  const response = await axiosInstance.post("/api/friends", {
    addresseeId,
  });
  return response.data;
  // { success, data: { friendshipId, requesterId, addresseeId, status, acceptedAt, createdAt } }
};

// 친구 요청 수락
export const acceptFriendRequest = async (friendshipId) => {
  const response = await axiosInstance.patch(
    `/api/friends/${friendshipId}/accept`,
  );
  return response.data;
};

// 친구 요청 거절
export const rejectFriendRequest = async (friendshipId) => {
  const response = await axiosInstance.patch(
    `/api/friends/${friendshipId}/reject`,
  );
  return response.data;
};

// 받은 친구 요청 목록
export const getReceivedRequests = async () => {
  const response = await axiosInstance.get("/api/friends/requests/received");
  return response.data;
};

// 자동완성용 친구 목록 (그룹 만들 때 검색 등에 사용)
export const getFriendSummaries = async () => {
  const response = await axiosInstance.get("/api/friends/summaries");
  return response.data;
};

// 친구 메모 작성/수정
export const updateFriendMemo = async (friendId, memo) => {
  const response = await axiosInstance.put("/api/friends/memos", {
    friendId,
    memo,
  });
  return response.data;
};

// 친구 메모 조회
export const getFriendMemo = async (friendId) => {
  const response = await axiosInstance.get(`/api/friends/memos/${friendId}`);
  return response.data;
};
