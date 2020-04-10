import React from 'react';
import Link from './link';

interface Props {
  pageTitle?: string;
}

export default ({ pageTitle }: Props) => {
  if (!pageTitle) {
    return null;
  }
  return (
    <header className="site-header">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Games</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {pageTitle}
          </li>
        </ol>
      </nav>
    </header>
  );
};
