import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import useInput from '../hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';

const CommentForm = ({ post }) => {
    const dispatch = useDispatch();
    const id = useSelector((state) => state.user.me?.id);
    const [commentText, onChangeCommentText, setCommentText] = useInput('');
    const onSubmitComment = useCallback((e) => { 
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: { content: commentText, postId: post.id, userId: id },
        })
        console.log(post.id, commentText);
    }, [commentText, id]);

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{ position: 'relative', margin: 0 }}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type="primary" htmlType="submit">삐약</Button>
            </Form.Item>
        </Form>    
    )
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;