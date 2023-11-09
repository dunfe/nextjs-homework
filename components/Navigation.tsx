'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link";

const Navigation = () => {
    const { user, isLoading } = useUser();

    return (
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        Menu <i className="fa fa-bars" />
                    </button>
                    <Link className="navbar-brand" href="/">Start Bootstrap</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        {!isLoading &&
                            (user ? (
                                <>
                                    <li>
                                        <Link href="/post/new">New Post</Link>
                                    </li>
                                    <li>
                                        <a href="/api/auth/logout">Logout</a>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <a href="/api/auth/login">Login</a>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;