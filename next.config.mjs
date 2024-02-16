/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/rolling-dough",
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_PROD: "true",
    },
};

export default nextConfig;
