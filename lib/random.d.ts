// Type definitions for @offirmo/random 2.0.0
// Based on random-js
// Based on the work of:
// Gustavo Di Pietro <https://github.com/pistacchio>
// From https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "@offirmo/random" {

	export interface Engine {}

	export interface MT19937 extends Engine{
		(): number
		seed (value: number): MT19937;
		seedWithArray(array: Array<number>): MT19937
		autoSeed(): MT19937;
		discard(count: number): MT19937;
		getUseCount(): number;
	}

	export class Random {
		constructor (engine?: Engine);

		static engines: {
			nativeMath: Engine,
			browserCrypto: Engine,
			mt19937: () => MT19937
		}

		static integer(min: number, max: number): (engine: Engine) => number;
		static real(min: number, max: number, inclusive: boolean): (engine: Engine) => number;
		static bool(percentage?: number): (engine: Engine) => boolean;
		static bool(numerator: number, denominator: number): (engine: Engine) => boolean;
		static pick<T>(engine: Engine, array: Array<T>, begin?: number, end?: number): T;
		static picker<T>(array: Array<T>, begin?: number, end?: number): (engine: Engine) => T;
		static shuffle<T>(engine: Engine, array: Array<T>): Array<T>;
		static sample<T>(engine: Engine, population: Array<T>, sampleSize: number): Array<T>;
		static die(sideCount: number): (engine: Engine) => number;
		static dice(sideCount: number, dieCount: number): (engine: Engine) => number;
		static uuid4(engine: Engine): string;
		static string(pool?: string): (engine: Engine, length: number) => string;
		static hex(upperCase?: boolean): (engine: Engine, length: number) => string;
		static date(start: Date, end: Date): (engine: Engine) => Date;

		integer(min: number, max: number): number;
		real(min: number, max: number, inclusive: boolean): number;
		bool(percentage?: number): boolean;
		bool(numerator: number, denominator: number): boolean;
		pick<T>(array: Array<T>, begin?: number, end?: number): T;
		shuffle<T>(array: Array<T>): Array<T>;
		sample<T>(population: Array<T>, sampleSize: number): Array<T>;
		die(sideCount: number): number;
		dice(sideCount: number, dieCount: number): number;
		uuid4(): string;
		string(length: number, pool?: string): string;
		hex(length: number, upperCase?: boolean): string;
		date(start: Date, end: Date): Date;
	}
}
