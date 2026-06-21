import axiosInstance from "./axiosInstance";

// 내 친구 목록
// 응답: { success, data: [{ friendshipId, savedAt, person: { userId, name, characterId,
//                            school, gender, birthYear, mbti, interests, groupTags } }] }
// sort: "recent" | "name" (생략 가능)
export const getFriends = async (sort) => {
  const response = await axiosInstance.get("/api/friends", {
    params: sort ? { sort } : {},
  });
  return response.data;
};

// 친구 추가(수락) — QR/URL로 접속한 상대 프로필에서 '수락' 시 호출.
// 상호 등록(나↔상대) + 첫 만남 퀴즈 알림 발송. 자기 자신은 추가 불가(400).
// 요청: { friendId }
export const addFriend = async (friendId) => {
  const response = await axiosInstance.post("/api/friends", { friendId });
  return response.data;
  // { success, data: { friendshipId, friendId, createdAt } }
};

// 친구 삭제 — 내 쪽 관계만 끊음(상대 무영향). friendId(상대 userId) 기준.
export const deleteFriend = async (friendId) => {
  const response = await axiosInstance.delete(`/api/friends/${friendId}`);
  return response.data;
};

// 자동완성용 친구 목록 (그룹 만들 때 친구 검색용) - id+이름만, 캐릭터 포함
export const getFriendSummaries = async () => {
  const response = await axiosInstance.get("/api/friends/summaries");
  return response.data;
  // { success, data: [{ friendId, name, characterId }] }
};

// 친구 메모 작성/수정 - 필드명이 memo가 아니라 content
export const updateFriendMemo = async (friendId, content) => {
  const response = await axiosInstance.put("/api/friends/memos", {
    friendId,
    content,
  });
  return response.data;
};

// 친구 메모 조회
// 응답: { success, data: { memoId, friendId, content, updatedAt } }
export const getFriendMemo = async (friendId) => {
  const response = await axiosInstance.get(`/api/friends/memos/${friendId}`);
  return response.data;
};
