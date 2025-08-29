export async function load({ fetch }) {
  const response = await fetch('/data/enablement.json');
  const enablement = await response.json();
  
  return {
    enablement
  };
}