import { withContentlayer } from "next-contentlayer"

export default withContentlayer({
    reactStrictMode: true,
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["@prisma/client"],
    }
})
