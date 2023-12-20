import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './base.css';
import App from './components/App';
import './service/i18n';
import { Alert, Flex, Spin } from 'antd';


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Suspense
                fallback={
                    <Flex gap="small" vertical>
                        <Spin tip="Loading...">
                            <Alert
                                message="Wait for loading"
                                description=""
                                type="info"
                            />
                        </Spin>
                    </Flex>
                }
            >
                <App />
            </Suspense>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root'),
);
