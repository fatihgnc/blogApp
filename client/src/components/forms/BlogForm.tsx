import React, { useContext } from 'react';
import useInput from '../hooks/use-input';
import MainContentWrapper from '../layout/MainContentWrapper';
import { BlogContext } from '../store/BlogProvider';
import { UserContext } from '../store/UserProvider';

import styles from './LoginAndRegisterForm.module.css';

const BlogForm = () => {
    const userCtx = useContext(UserContext);
    const blogCtx = useContext(BlogContext);

    const {
        inputValue: titleInput,
        inputHasError: titleHasError,
        inputIsValid: titleIsValid,
        onBlur: titleOnBlur,
        onChange: titleOnChange,
        resetInput: resetTitleInput,
        valMessage: titleValidationMessage,
    } = useInput(
        'Title must be provided and should be between 5-50 chars!',
        '',
        (input) => input.trim().length >= 5 && input.trim().length <= 50
    );

    const {
        inputValue: contentInput,
        inputHasError: contentHasError,
        inputIsValid: contentIsValid,
        onBlur: contentOnBlur,
        onChange: contentOnChange,
        resetInput: resetContentInput,
        valMessage: contentValidationMessage,
    } = useInput(
        'Content must be provided and should be between 30-400 chars!',
        '',
        (input) => input.trim().length >= 30 && input.trim().length <= 400
    );

    let formValidity = false;

    if (titleIsValid && contentIsValid) {
        formValidity = true;
    }

    const resetForm = () => {
        resetTitleInput('');
        resetContentInput('');
    };

    const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formValidity) return;

        resetForm();
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'grid',
                placeItems: 'center',
            }}>
            <MainContentWrapper
                backgroundColor='#8899b0'
                padding='50px'
                width='40%'>
                <form onSubmit={handleSubmission}>
                    <div>
                        <h1>Add blog</h1>
                    </div>
                    <div>
                        <label htmlFor='blog-title'>Blog title</label>
                        <input
                            type='text'
                            id='blog-title'
                            required
                            value={titleInput as string}
                            onChange={titleOnChange}
                            onBlur={titleOnBlur}
                            style={{
                                fontSize: '19px',
                            }}
                        />
                        {titleHasError && (
                            <span className={styles.invalid}>
                                {titleValidationMessage}
                            </span>
                        )}
                    </div>
                    <div>
                        <label htmlFor='blog-content'>Blog content</label>
                        <textarea
                            onChange={contentOnChange}
                            onBlur={contentOnBlur}
                            value={contentInput as string}
                            id='blog-content'
                            rows={10}
                            required
                            style={{
                                resize: 'none',
                                width: '100%',
                                outline: 'none',
                                border: 'none',
                                padding: '15px',
                                fontSize: '18px',
                                backgroundColor: '#eee',
                            }}></textarea>
                        {contentHasError && (
                            <span className={styles.invalid}>
                                {contentValidationMessage}
                            </span>
                        )}
                    </div>
                    <div>
                        <button
                            onClick={async (_) => {
                                try {
                                    await blogCtx.createBlog(
                                        titleInput as string,
                                        contentInput as string,
                                        userCtx.user?._id as string
                                    );
                                } catch (error) {
                                    console.log(error);
                                }
                            }}
                            style={{
                                borderRadius: '15px',
                                cursor: 'pointer',
                                backgroundColor: '#ddd',
                            }}>
                            Add
                        </button>
                    </div>
                    <input type='hidden' value={userCtx.user?._id} />
                </form>
            </MainContentWrapper>
        </div>
    );
};

export default BlogForm;
