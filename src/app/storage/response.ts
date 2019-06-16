interface Response {
	"@odata.context": string;
	value: Array<ResponseItem>;
}

interface ResponseItem {
	"@microsoft.graph.downloadUrl"?: string;
	createdDateTime: string;
	cTag: string;
	eTag: string;
	id: string;
	lastModifiedDateTime: string;
	name: string;
	size: number;
	webUrl: string;
	createdBy: {
		application: {
			displayName: string;
			id: string
		};
		device: {
			id: string
		};
		user: {
			displayName: string;
			id: string
		};
		oneDriveSync: {
			"@odata.type": string;
			id: string
		}
	};
	lastModifiedBy: {
		application: {
			displayName: string;
			id: string
		};
		device: {
			id: string
		};
		user: {
			displayName: string;
			id: string
		};
		oneDriveSync: {
			"@odata.type": string;
			id: string
		}
	};
	parentReference: {
		driveId: string;
		driveType: string;
		id: string;
		name: string;
		path: string
	};
	fileSystemInfo: {
		createdDateTime: string;
		lastModifiedDateTime: string
	};
	folder?: {
		childCount: number;
		view: {
			viewType: string;
			sortBy: string;
			sortOrder: string
		}
	};
	file?: {
		mimeType: string;
		hashes: {
			sha1Hash: string;
			quickXorHash: string
		}
	};
}

export { Response, ResponseItem };