'use client';

import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: Readonly<LayoutProps>) {
    return (
        <div>{children}</div>
    );
}
