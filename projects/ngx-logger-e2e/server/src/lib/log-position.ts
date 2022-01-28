export class LogPosition {
	public constructor(
		public fileName: string,
		public lineNumber: number,
		public columnNumber: number,
	) {}

	/**
	 * Convert the log position to a string.
	 *
	 * @returns the string formatted log position.
	 */
	public toString() {
		return `${this.fileName}:${this.lineNumber}:${this.columnNumber}`;
	}
}
