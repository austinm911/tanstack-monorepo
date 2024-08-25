import { type RefObject, useEffect, useState } from 'react'

export function useResizeObserver(
	elementRef: RefObject<Element>,
): ResizeObserverEntry | undefined {
	const [entry, setEntry] = useState<ResizeObserverEntry>()

	useEffect(() => {
		const node = elementRef?.current
		if (!node) return

		const updateEntry = ([entry]: ResizeObserverEntry[]): void => {
			setEntry(entry)
		}

		const observer = new ResizeObserver((entries) => {
			updateEntry(entries)
		})

		observer.observe(node)

		return () => observer.disconnect()
	}, [elementRef])

	return entry
}
