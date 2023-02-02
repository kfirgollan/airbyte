import logging
from typing import Optional, Tuple

import requests

from airbyte_cdk.sources.streams.http.availability_strategy import HttpAvailabilityStrategy


class ZendeskSupportAvailabilityStrategy(HttpAvailabilityStrategy):

    def check_availability(
            self, stream: "source_zendesk_support.streams.SourceZendeskSupportStream",
            logger: logging.Logger,
            source: Optional["Source"]
    ) -> Tuple[bool, Optional[str]]:
        try:
            stream.get_api_records_count()
        except requests.HTTPError as error:
            return self.handle_http_error(stream, logger, source, error)
        return True, None
