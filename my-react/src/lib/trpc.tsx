import type {TrpcRouter} from "@service_/backend/src/trpc";
import { createTRPCReact } from "@trpc/react-query";

const trpc = createTRPCReact<TrpcRouter>();