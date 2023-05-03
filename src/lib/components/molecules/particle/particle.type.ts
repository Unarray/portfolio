import type { Engine, Container as EngineContainer } from "tsparticles-engine";

export type ParticlesInit = (engine: Engine) => Promise<void>;
export type Container = EngineContainer | undefined;