import { Link } from "@inertiajs/react";


const Navbar = ({ user }) => {
    return (
        <div className="navbar bg-blue-400 fixed z-50 top-0">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl text-slate-950">
                    CuyNews
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-slate-300 input input-bordered w-24 md:w-auto "
                    />
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li className="hover:text-white">
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li className="hover:text-white">
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="hover:text-white">
                                    <Link
                                        href={route("dashboard")}
                                        className="justify-between"
                                    >
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li className="hover:text-white">
                                    <Link href={route("profile.edit")}>
                                        Settings
                                    </Link>
                                </li>
                                <li className="hover:text-white">
                                    <Link
                                        href={route("logout")}
                                        method="POST"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
