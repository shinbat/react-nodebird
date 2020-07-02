import React, { useCallback, useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const ErrorMessage = styled.div`
    color: red
`;

const Signup = () => {
    const dispatch = useDispatch();
    const { signUpLoading, signUpDone, signUpError, me } = useSelector((state) => state.user);
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, [password]);

    useEffect(() => {
        if (me && me.id) {
            Router.replace('/');
        }
    }, [me && me.id]);
    useEffect(() => {
        if (signUpDone) {
            Router.replace('/');
        }
    }, [signUpDone]);
/*     
    const signUpDone = useRef(false);
    useEffect(() => {
        if (signUpDone.current) {
            if (!signUpLoading) {
                Router.push('/');
            };
        } else {
            signUpDone.current = true;
        }
    }, [signUpLoading, signUpDone]); 
*/

    useEffect(() => {
        if (signUpError) {
            alert(signUpError);     
        }
    }, [signUpError]);

    const onsubmit = useCallback(() => {
        if (password !== passwordCheck ) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(email, nickname, password);
        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, nickname, password },
        });
     }, [email, password, passwordCheck, term]);

    return (
        <AppLayout>
            <Head>
                <meta charSet="utf-8"/>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onsubmit}>
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br/>
                    <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input name="user-password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br/>
                    <Input name="user-password-check" value={passwordCheck} required onChange={onChangePasswordCheck} />
                    {passwordError && <ErrorMessage> 비밀번호가 일치하지 않습니다. </ErrorMessage>} 
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다</ErrorMessage>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
                </div>
     
            </Form>
        </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    console.log('getServerSideProps start');
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
        axios.defaults.headers.Cookie = cookie; 
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    console.log('getServerSideProps end');
    await context.store.sagaTask.toPromise();
});

export default Signup;