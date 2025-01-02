/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
	experimental: {
<<<<<<< HEAD
		typedRoutes: false,
=======
		typedRoutes: true,
>>>>>>> 68501ca (Initial commit)
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
