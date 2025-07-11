import { promises as fs } from 'fs';
import { join } from 'path';

/**
 * Retrieves data from a specified resource with generic type support.
 * @param resource - Relative path or identifier for data retrieval
 * @returns Promise resolving to the parsed data of specified type
 */
export async function data<T>(resource: string): Promise<T> {
  try {
    // Make sure resource starts with /public/
    if (!resource.startsWith('/public/')) {
      resource = '/public/' + (resource.startsWith('/') ? resource.slice(1) : resource);
    }
    
    const path = join(process.cwd(), resource);
    const contents = await fs.readFile(path, 'utf8');
    return JSON.parse(contents) as T;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to retrieve data from ${resource}: ${error.message}`);
    }
    throw error;
  }
}

// Example usage:
// interface BlogPost { title: string; content: string; }
// const posts = await data<BlogPost[]>('/public/data/furniture/featured-blog-posts.json')