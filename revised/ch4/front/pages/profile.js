import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const followerList = [{ nickname: '제로초'}, { nickname: '바보'}, { nickname: '노드버드 오피셜'}];
const followingList = [{ nickname: '제로초'}, { nickname: '바보'}, { nickname: '노드버드 오피셜'}];

const Profile = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm/>
                <FollowList header="팔로잉 목록" data={followingList}></FollowList>
                <FollowList header="팔로워 목록" data={followerList}></FollowList>
            </AppLayout>
        </>
    );
};

export default Profile;