import { FormatterField, JobCleanStatus, JobCounts, JobStatus, QueueAdapterOptions, QueueJob } from '../../typings/app';
export declare abstract class BaseAdapter {
    readonly readOnlyMode: boolean;
    readonly allowRetries: boolean;
    readonly prefix: string;
    private formatters;
    protected constructor(options?: Partial<QueueAdapterOptions>);
    setFormatter<T extends FormatterField>(field: T, formatter: (data: any) => T extends 'name' ? string : any): void;
    format(field: FormatterField, data: any, defaultValue?: any): any;
    abstract clean(queueStatus: JobCleanStatus, graceTimeMs: number): Promise<void>;
    abstract getJob(id: string): Promise<QueueJob | undefined | null>;
    abstract getJobCounts(...jobStatuses: JobStatus[]): Promise<JobCounts>;
    abstract getJobs(jobStatuses: JobStatus[], start?: number, end?: number): Promise<QueueJob[]>;
    abstract getJobLogs(id: string): Promise<string[]>;
    abstract getName(): string;
    abstract getRedisInfo(): Promise<string>;
    abstract isPaused(): Promise<boolean>;
    abstract pause(): Promise<void>;
    abstract resume(): Promise<void>;
}
