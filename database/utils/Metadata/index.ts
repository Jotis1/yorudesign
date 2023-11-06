export interface DateProps {
    creationDate: Date,
    modificationDate?: Date,
    deletionDat?: Date
}

export default interface MetadataProps extends DateProps {
    location?: string;
}