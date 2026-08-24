export default function Cargando() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-borde border-t-acento" />
      <span className="sr-only">Cargando</span>
    </div>
  );
}
