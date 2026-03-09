import * as prismic from "@prismicio/client";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = "ca-nagaraju-website";

/**
 * The project's Prismic Route Resolver configuration.
 * Route resolvers define how Prismic documents map to routes in your application.
 */
const routes: prismic.ClientConfig["routes"] = [
    // Add routes here if needed, e.g. for team member pages
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismic.ClientConfig = {}) => {
    const client = prismic.createClient(repositoryName, {
        routes,
        ...config,
    });

    return client;
};
