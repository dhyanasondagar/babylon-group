export function slugify(name: string | undefined | null): string {
    if (!name) {
      return '';  // Handle undefined or null case
    }
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
  }