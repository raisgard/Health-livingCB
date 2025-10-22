export async function fetchRecipes() {
  const response = await fetch('data/recipes.json');
  if (!response.ok) throw new Error('Failed to load recipes');
  return await response.json();
}
