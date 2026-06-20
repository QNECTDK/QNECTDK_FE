import axiosInstance from "./axiosInstance";

// 내 프로필 조회
// 응답: { success, data: { userId, name, age, zodiac, school, gender("MALE"/"FEMALE"),
//                           mbti, drinkLevel, favoriteFood, imageUrl, publicCode, profileCompleted } }
// 미작성 상태면 profileCompleted: false 로 내려옴 (기본정보만 채워짐)
export const getMyProfile = async () => {
  const response = await axiosInstance.get("/api/profiles/me");
  return response.data;
};

// 프로필 작성/수정
// 요청 body: { school, gender, mbti, drinkLevel, favoriteFood }
// name, age는 회원가입 때 정해지는 값이라 여기서 보내지 않음
export const updateMyProfile = async ({
  school,
  gender,
  mbti,
  drinkLevel,
  favoriteFood,
}) => {
  const response = await axiosInstance.put("/api/profiles/me", {
    school,
    gender,
    mbti,
    drinkLevel,
    favoriteFood,
  });
  return response.data;
};

// 프로필 이미지 업로드 (multipart, 키 이름 "image")
// 응답: { success, data: { imageUrl } }
export const uploadProfileImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await axiosInstance.post(
    "/api/profiles/me/image",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return response.data;
};

// 공개코드로 (다른 사람) 프로필 조회 — QR 스캔 후 사용
// 응답 구조는 getMyProfile()과 동일
export const getProfileByPublicCode = async (publicCode) => {
  const response = await axiosInstance.get(`/api/profiles/${publicCode}`);
  return response.data;
};

// 내 공유 정보 조회 — QR 코드 생성용
// 응답: { success, data: { publicCode, shareUrl } }  ※ 이름/학교/MBTI는 안 줌!
// 화면에 이름 등을 같이 보여주려면 getMyProfile()도 같이 호출해야 함
export const getMyShareInfo = async () => {
  const response = await axiosInstance.get("/api/profiles/me/share");
  return response.data;
};
